import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {isHead: true, total: 0, heads: 0, tails: 0}

  change = () => {
    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult === 0) {
      this.setState(prevState => ({
        isHead: true,
        total: prevState.total + 1,
        heads: prevState.heads + 1,
      }))
    } else {
      this.setState(prevState => ({
        isHead: false,
        total: prevState.total + 1,
        tails: prevState.tails + 1,
      }))
    }
  }

  render() {
    const {isHead, total, heads, tails} = this.state

    return (
      <div className="page">
        <div className="card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="headingPara">Heads (or) Tails</p>
          <img
            src={
              isHead
                ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
            }
            className="image"
            alt="toss result"
          />
          <button type="button" onClick={this.change}>
            Toss Coin
          </button>
          <div className="paraContainer">
            <p>Total:{total}</p>
            <p>Heads:{heads}</p>
            <p>Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
