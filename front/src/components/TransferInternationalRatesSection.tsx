
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const TransferInternationalRatesSection: React.FC = () => {
  const [transferMethod, setTransferMethod] = useState('western-union');
  const [amount, setAmount] = useState('');
  const [fees, setFees] = useState('');

  const calculateFees = () => {
    const amountValue = parseFloat(amount);
    if (!isNaN(amountValue)) {
      let calculatedFee = 0;
      if (transferMethod === 'western-union') {
        // Western Union pricing
        if (amountValue >= 0 && amountValue <= 1000) calculatedFee = 100;
        else if (amountValue >= 1001 && amountValue <= 3000) calculatedFee = 210;
        else if (amountValue >= 3001 && amountValue <= 5000) calculatedFee = 330;
        else if (amountValue >= 5001 && amountValue <= 10000) calculatedFee = 440;
        else calculatedFee = 440; // For amounts above 10000
      } else {
        // MoneyGram pricing
        if (amountValue >= 0 && amountValue <= 1000) calculatedFee = 95;
        else if (amountValue >= 1001 && amountValue <= 3000) calculatedFee = 190;
        else if (amountValue >= 3001 && amountValue <= 5000) calculatedFee = 320;
        else if (amountValue >= 5001 && amountValue <= 10000) calculatedFee = 430;
        else calculatedFee = 430; // For amounts above 10000
      }
      setFees(calculatedFee.toFixed(2));
    } else {
      setFees("");
    }
  };

  return (
    <section className="bg-[#fef6e4] py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#5A433D] mb-12">
            Nos tarifs pour l'envoi à l'international
          </h2>
          
          {/* Orange container for the form */}
          <div className="bg-[#f47c2c] rounded-3xl p-8 space-y-6">
            {/* Amount input */}
            <div>
              <input
                type="text"
                placeholder="Montant de l'envoi"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full p-4 rounded-lg border-2 border-[#e36b1b] bg-[#f47c2c] text-white placeholder-white/80 text-center font-medium focus:outline-none focus:border-white"
              />
            </div>
            
            {/* Transfer method selection */}
            <div className="space-y-3">
              <RadioGroup 
                value={transferMethod} 
                onValueChange={setTransferMethod}
                className="grid grid-cols-2 gap-3"
              >
                <div className="flex items-center space-x-2">
                  <label className="flex-1 cursor-pointer">
                    <div className={`p-3 rounded-lg text-center font-medium transition-colors ${
                      transferMethod === 'western-union' 
                        ? 'bg-[#e36b1b] text-white' 
                        : 'bg-white text-[#5A433D]'
                    }`}>
                      <RadioGroupItem value="western-union" className="sr-only" />
                      VIA WESTERN UNION
                    </div>
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <label className="flex-1 cursor-pointer">
                    <div className={`p-3 rounded-lg text-center font-medium transition-colors ${
                      transferMethod === 'moneygram' 
                        ? 'bg-[#e36b1b] text-white' 
                        : 'bg-white text-[#5A433D]'
                    }`}>
                      <RadioGroupItem value="moneygram" className="sr-only" />
                      VIA MONEYGRAM
                    </div>
                  </label>
                </div>
              </RadioGroup>
            </div>
            
            
            {/* Calculate fees button */}
            <Button 
              className="w-full bg-white text-[#5A433D] hover:bg-gray-100 font-bold py-4 rounded-lg text-lg"
              onClick={calculateFees}
            >
              CALCULEZ LES FRAIS D'ENVOI
            </Button>
            
            {/* Fees to pay */}
            <div>
              <input
                type="text"
                placeholder="Frais à payer"
                value={fees}
                readOnly
                className="w-full p-4 rounded-lg border-2 border-[#e36b1b] bg-[#f47c2c] text-white placeholder-white/80 text-center font-medium focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransferInternationalRatesSection;
