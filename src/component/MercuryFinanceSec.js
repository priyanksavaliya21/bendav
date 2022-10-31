import React from 'react';
import Container from 'react-bootstrap/Container';
import WebHeading from './common/WebHeading';
import Fade from 'react-reveal/Fade';
import mercury_finance_animation from '../assets/images/HomePage/mercury_finance_animation.png';

const MercuryFinanceSec = () => {
    return (
        <section className='mercury_finance_sec sam_padding'>
            <Container>
                <WebHeading heading_text="Mercury Finance" heading_text_color=" Vs " heading_text2="Defi 1.0 Stableswaps" />
                <Fade bottom duration={1000}>
                    <div className='table_main_block'>
                        <table className='table_block'>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Other Stableswaps</th>
                                    <th>MercuryFi Exchange</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Pool Design</td>
                                    <td>Closed Pools</td>
                                    <td>Open Liquidity Pool</td>
                                </tr>
                                <tr>
                                    <td>Deposit Method</td>
                                    <td>Multiple Tokens</td>
                                    <td>Single Token</td>
                                </tr>
                                <tr>
                                    <td>UX Design</td>
                                    <td>Complicated</td>
                                    <td>Simple</td>
                                </tr>
                                <tr>
                                    <td>Slippage</td>
                                    <td>Low</td>
                                    <td>Very Low</td>
                                </tr>
                                <tr>
                                    <td>Asset Scalabitility</td>
                                    <td>Limited</td>
                                    <td>Very Well</td>
                                </tr>
                                <tr>
                                    <td>Capital Efficiency</td>
                                    <td>Good</td>
                                    <td>Better</td>
                                </tr>
                                <tr>
                                    <td>De-Peg Protection</td>
                                    <td>No</td>
                                    <td>Yes</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Fade>
            </Container>
            <div className='mercury_finance_animation'>
                <img src={mercury_finance_animation} alt="" />
            </div>
        </section>
    )
}

export default MercuryFinanceSec;