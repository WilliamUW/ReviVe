import React from "react";
import { useWallet, useConnex } from "@vechain/dapp-kit-react";
import { clauseBuilder, unitsUtils } from "@vechain/sdk-core";
import { Button } from "@chakra-ui/react";

interface SendTransactionProps {
  recipientAddress: string;
  tokenAddress?: string; // Optional, if not provided, assume VET transfer
  amount: number;
  buttonText: string;
  decimals?: number; // Optional, default to 18 for VET
}

export default function SendTransaction({
  recipientAddress,
  tokenAddress,
  amount,
  buttonText,
  decimals = 18,
}: SendTransactionProps) {
  const { account } = useWallet();
  const connex = useConnex();

 

  const [txId, setTxId] = React.useState<string>("");
  const [error, setError] = React.useState<string>("");

  const handleSend = async () => {
    if (!account || !recipientAddress) {
      return;
    }

    try {
      setError("");

      const clauses = [
        {
          ...(tokenAddress
            ? clauseBuilder.transferToken(
                tokenAddress,
                recipientAddress,
                unitsUtils.parseUnits(amount, decimals)
              )
            : clauseBuilder.transferVET(
                recipientAddress,
                unitsUtils.parseVET(amount.toString())
              )),
          comment: `Send ${amount} ${tokenAddress ? "tokens" : "VET"}`,
        },
      ];

      const tx = connex.vendor.sign("tx", clauses).signer(account);

      const { txid } = await tx.request();
      setTxId(txid);
    } catch (err) {
      setError(String(err));
    }
  };

  if (!account) {
    return <p>Please connect your wallet to continue.</p>;
  }

  const canSend = Boolean(account && amount && recipientAddress);

  return (
    <div className="space-y-4 max-w-lg">
      <Button
        className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${!canSend ? "opacity-25" : ""}`}
        disabled={!canSend}
        onClick={handleSend}
      >
        {buttonText}
      </Button>

      {Boolean(error) && (
        <div className="text-red-500">
          <p>Transaction ID: {txId}</p>
          <p>Error: {error}</p>
        </div>
      )}
      {Boolean(txId) && !error && (
        <div className="text-green-500">
          <p>Transaction sent successfully!</p>
          <p>Transaction ID: {txId}</p>
        </div>
      )}
    </div>
  );
}
