
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const TransferEstimateFeesSection: React.FC = () => {
  const [amount, setAmount] = useState<string>("");
  const [fees, setFees] = useState<string>("");

  const calculateFees = () => {
    const amountValue = parseFloat(amount);
    if (!isNaN(amountValue)) {
      // Updated to match grille tarifaire - National transfer pricing
      let calculatedFee = 0;
      if (amountValue >= 0 && amountValue <= 50) calculatedFee = 5;
      else if (amountValue >= 51 && amountValue <= 100) calculatedFee = 10;
      else if (amountValue >= 101 && amountValue <= 200) calculatedFee = 24;
      else if (amountValue >= 201 && amountValue <= 500) calculatedFee = 33;
      else if (amountValue >= 501 && amountValue <= 1000) calculatedFee = 37;
      else if (amountValue >= 1001 && amountValue <= 2000) calculatedFee = 45;
      else if (amountValue >= 2001 && amountValue <= 3000) calculatedFee = 47;
      else if (amountValue >= 3001 && amountValue <= 4000) calculatedFee = 53;
      else if (amountValue >= 4001 && amountValue <= 5000) calculatedFee = 56;
      else if (amountValue >= 5001 && amountValue <= 10000) calculatedFee = 65;
      else if (amountValue > 10000) calculatedFee = Math.round(amountValue * 0.0065); // 0.65%
      
      setFees(calculatedFee.toFixed(2));
    } else {
      setFees("");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Estimez vos frais</h2>
      <div className="max-w-md mx-auto">
        <div className="mb-4">
          <Input 
            type="number"
            placeholder="Montant à transférer"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mb-2"
          />
        </div>
        <Button onClick={calculateFees} className="w-full mb-4">
          Calculer les frais
        </Button>
        {fees && (
          <div className="text-center">
            <p className="text-lg">Frais estimés: <span className="font-bold">{fees} DH</span></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TransferEstimateFeesSection;
