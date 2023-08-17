import React, { useEffect, useRef, useState } from 'react';
import { EnergyTradingEscrow } from '../contracts/energy';
import { toByteString, hash160, bsv, ScryptProvider, SensiletSigner, PubKey, Sig } from 'scrypt-ts';


function Trade() {
    const [contract, setContract] = useState<EnergyTradingEscrow | null>(null);
    const [energyAmount, setEnergyAmount] = useState<bigint>(0n);
    const [energyPrice, setEnergyPrice] = useState<bigint>(0n);
    const [availableEnergies, setAvailableEnergies] = useState<{ amount: bigint, price: bigint }[]>([]);
    const [sellerPubKey, setSellerPubKey] = useState<bsv.PublicKey | null>(null);
    const [buyerPubKey, setBuyerPubKey] = useState<bsv.PublicKey | null>(null);
    


    const handleAddAndDeploy = async () => {
        const provider = new ScryptProvider();
        const signer = new SensiletSigner(provider);

        const seller = await signer.getDefaultPubKey();
        setSellerPubKey(seller);

        const buyer = await signer.getDefaultPubKey();  // Simulating buyer public key here
        setBuyerPubKey(buyer);

        const instance = new EnergyTradingEscrow(hash160(seller.toHex()), hash160(buyer.toHex()), energyPrice);
        await instance.connect(signer);

       // const energyprice = BigInt ()

        const deployTx = await instance.deploy();
        console.log(`EnergyTradingEscrow contract deployed: ${deployTx.id}`);

        setContract(instance);
        setAvailableEnergies([...availableEnergies, { amount: energyAmount, price: energyPrice }]);
        setEnergyAmount(0n);
        setEnergyPrice(0n);
    };

    const handleBuyEnergy = async () => {
        const provider = new ScryptProvider();
        const signer = new SensiletSigner(provider);
        const seller = await signer.getDefaultPubKey();
        const buyer = await signer.getDefaultPubKey();
        const buyerSig = Sig;
        
        const instance = new EnergyTradingEscrow(hash160(seller.toHex()), hash160(buyer.toHex()), energyPrice);
        await instance.connect(signer)



        
        instance.methods.buyEnergy(buyerSig, buyer);
        const buyEnergyTx = await instance.deploy();
        console.log(`Energy bought: ${buyEnergyTx.id}`);
         
        
    };

    return (
        <div>
            <div>
                <h3>Add Energy</h3>
                Energy amount <input type="number" placeholder="Energy Amount" value={energyAmount.toString()} onChange={(e) => setEnergyAmount(BigInt(e.target.value))} />
                kW
                Price <input type="number" placeholder="Energy Price" value={energyPrice.toString()} onChange={(e) => setEnergyPrice(BigInt(e.target.value))} />
                
                <button onClick={handleAddAndDeploy}>Add Energy</button>
            </div>
            <div>
                <h3>Available List of Energy</h3>
                {availableEnergies.map((energy, index) => (
                    <div key={index}>
                       <p> Energy: {energy.amount.toString()} kW </p>  
                       <p> Price: {energy.price.toString()} </p> 
                        <button onClick={ handleBuyEnergy }>Buy Energy</button>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default Trade;




