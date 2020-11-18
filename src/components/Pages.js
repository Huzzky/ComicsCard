import React, { Component } from 'react'
import "./css/Page.css"



class Pages extends Component {
    
    componentDidMount() {
        this.props.getCard("Load", 34)
    }
    

    onBtnClock = () => {
        this.props.getCard("Load")
    }

    partingCards = (arrCards) => {
        arrCards = arrCards.arr
        let allCards = arrCards.map((index, key) => 
        <div key={key} className="grid-card card">
            <img src={index.image.original_url} alt={index.name} width="auto" height="256px"/>
            <h1>{index.name}</h1>
            <p>{index.deck}</p>
            <p>{index.publisher.name}</p>
        </div>)
        console.log(allCards)
        return allCards
    }

    render() {
        const { arr, isFetch} = this.props.charactersCard
        if (isFetch) {
            return (
                <div>
                    <p>Загрузка</p>
            </div>
            )
        } else if(!isFetch) {
            
            if (arr.length > 0) {
                
                return (
                    <div className="grid grid-table">
                        {<this.partingCards arr={arr}/>}

                    </div>
                )
            } if (arr.length === 0) {
                return(
                    <div>
                        <h1>Что-то пошло не так, нажмите на кнопку</h1>
                        <button onClick={this.onBtnClock}>Загрузить</button>
                    </div>
                )
            }
            // else {
            //     return (
            //         <div>
            //             <button onClick={this.onBtnClock}>Загрузить</button>
            //         </div>
            //     )
            // }
            
        }
        
        
        
        
    }
}

export default Pages;