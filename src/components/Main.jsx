import React from 'react'

export const Main = () => {
  return (
    <div>
        <div className="stakingAndReward">
            <div className="staking">
                <h3>Staking Balance</h3>
                <p>0</p>
            </div>

            <div className="reward">
                <h3>Reward Balance</h3>
                <p>0</p>
            </div>
        </div>

        <form action="">
            <div className="stakeAndBalance">
                <h3>Stake YHT</h3>
                <p>Balance: YHT</p>
            </div>
            <input type="text" name="" required id="" />
            <button type="submit">Stake YHT</button>
            <button type="submit">Unstake YHT</button>
        </form>

        
    </div>
  )
}
