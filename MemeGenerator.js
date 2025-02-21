import React, { Component } from "react"

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1big.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)

    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const { memes } = response.data
                console.log(memes[0])
                this.setState({ allMemeImgs: memes })
            })
    }

    handleChange(event) {
        console.log("is this good?")

        const { name, value } = event.target
        this.setState({ [name]: value });

    }

    handleClick(event) {
        console.log("testing")

        event.preventDefault()
        const randomIndex = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randomMeme = this.state.allMemeImgs[randomIndex]

        this.setState({ randomImage: randomMeme.url })


    }


    render() {
        return (
            <div>
                <form className="meme-form">

                    <input
                        type="text"
                        name="topText"
                        placeholder="topText"
                        value={this.state.topText}
                        onChange={this.handleChange}

                    />

                    <input
                        type="text"
                        name="bottomText"
                        placeholder="bottomText"
                        value={this.state.bottomText}
                        onChange={this.handleChange}

                    />

                    <button onClick={this.handleClick}>Generate</button>

                </form>


                <div className="meme">

                    <img
                        src={this.state.randomImage}
                        alt=""
                        style={{
                            height: "300px",
                            width: "300px"
                        }}
                    />

                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>

                </div>
            </div>
        )
    }
}

export default MemeGenerator