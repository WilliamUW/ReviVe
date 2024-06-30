import React from "react";
import { RECIPIENT_ADDRESS } from "./config";
import { useWallet, useConnex } from "@vechain/dapp-kit-react";
import { clauseBuilder, unitsUtils } from "@vechain/sdk-core";
import { Token } from "./types";
import SelectToken from "./SelectToken";
import { Button, HStack, Input } from "@chakra-ui/react";

interface SendTransactionProps {
  inputRecipientAddress?: string;
  tokenAddress?: string; // Optional, if not provided, assume VET transfer
  inputAmount?: number;
  buttonText?: string;
  decimals?: number; // Optional, default to 18 for VET
}

export default function BuyCoffee({
  inputRecipientAddress,
  inputAmount,
}: SendTransactionProps) {
  // get the connected wallet
  const { account } = useWallet();

  // and access to connex for interaction with vechain
  const connex = useConnex();

  // state for the currently selected token
  const [selectedToken, setSelectedToken] = React.useState<Token | undefined>();

  // state for the amount to send
  const [amount, setAmount] = React.useState<string>(
    inputAmount ? inputAmount.toString() : "1"
  );
  const convertedAmount: number =
    Math.round(parseFloat(amount) / (selectedToken?.price ?? 0.026));

  const handleChangeAmount = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setAmount(event.target.value);

  // state for sending status
  const [txId, setTxId] = React.useState<string>("");
  const [error, setError] = React.useState<string>("");
  const [recipientAddress, setRecipientAddress] = React.useState<string>(
    inputRecipientAddress || RECIPIENT_ADDRESS
  );
  const handleSend = async () => {
    if (!account || !recipientAddress) {
      return;
    }

    try {
      setError("");

      const clauses = [
        {
          ...// if a token was selected, transfer the token
          (selectedToken
            ? // the clauseBuilder helps build the data for the transaction
              clauseBuilder.transferToken(
                selectedToken.address,
                recipientAddress,
                unitsUtils.parseUnits(
                  convertedAmount.toString(),
                  selectedToken.decimals
                )
              )
            : // or use the clauseBuilder to transfer VET by default
              clauseBuilder.transferVET(
                recipientAddress,
                unitsUtils.parseVET(convertedAmount.toString())
              )),

          // an optional comment is shown to the user in the wallet
          comment: "Send " + amount + " " + (selectedToken?.symbol ?? "VET"),
        },
      ];

      // build a transaction for the given clauses
      const tx = connex.vendor
        .sign("tx", clauses)

        // requesting a specific signer will prevent the user from changing the signer to another wallet than the signed in one, preventing confusion
        .signer(account);

      // ask the user to sign the transaction
      const { txid } = await tx.request();

      // the resulting transaction id is stored to check for its status later
      setTxId(txid);
    } catch (err) {
      setError(String(err));
    }
  };

  if (!account) {
    return "Please connect your wallet to continue.";
  }

  // sending is disabled if there is no signed in account or no amount entered
  const canSend = Boolean(account && amount);
  return (
    <div className="space-y-4 max-w-lg">
      <div>
        <div className="relative mt-2 rounded-md shadow-sm">
          <Input
            type="text"
            disabled={true}
            value={recipientAddress}
            onChange={(e) => setRecipientAddress(e.target.value)}
          />
          <HStack>
            <Input
              type="text"
              name="amount"
              id="amount"
              placeholder="0"
              autoComplete="off"
              disabled={true}
              value={convertedAmount.toString()}
              onChange={handleChangeAmount}
              style={{ maxWidth: 100 }}
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <SelectToken onChange={setSelectedToken} />
            </div>
            <Button
              className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${!canSend ? "opacity-25" : ""}`}
              disabled={!canSend}
              onClick={handleSend}
            >
              Buy with {convertedAmount} {selectedToken?.symbol ?? "VET"}
            </Button>
          </HStack>
        </div>
        {/* <div className='text-xs text-gray-400 text-right cursor-pointer'>
                    <Balance token={selectedToken} onClick={setAmount} />
                </div> */}
      </div>

      {/* {Boolean(error) && <Error>{error}</Error>}
            <Transaction txId={txId} /> */}
      {Boolean(error) && (
        <div className="text-red-500">
          <p>{txId}</p>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}
