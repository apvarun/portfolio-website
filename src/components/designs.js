import React, { Component } from "react";
import { Link } from "react-router-dom";
import TransitionGroup from "react-transition-group/TransitionGroup";
import * as Animated from "animated/lib/targets/react-dom";
// import LazyLoad from "react-lazyload";

export default class Designs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            designs: [],
            animations: []
        };
    }
    componentDidMount() {
        this._renderDesigns(this.props.designs);
    }
    componentWillReceiveProps(nextProps) {
        if (!this.props.designs.length && nextProps.designs.length) {
            this._renderDesigns(nextProps.designs);
        }
    }
    _renderDesigns(designs) {
        console.log(designs);
        this.setState(
            {
                designs: designs,
                animations: designs.map((_, i) => new Animated.Value(0))
            },
            () => {
                Animated.stagger(
                    100,
                    this.state.animations.map(anim =>
                        Animated.spring(anim, { toValue: 1 })
                    )
                ).start();
            }
        );
    }
    render() {
        return (
            <div className="page designs">
                <h1>Designs</h1>
                <TransitionGroup component="ul">
                    {this.state.designs.map((p, i) => {
                        const style = {
                            opacity: this.state.animations[i],
                            transform: Animated.template`
								translate3d(0,${this.state.animations[i].interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["12px", "0px"]
                                })},0)
							`
                        };
                        return (
                            <li key={i}>
                                <Animated.div style={style}>
                                    <Link to={`/designs/${p.id}`}>
                                        <img src={p['image-preview']} />
                                        {p.title}
                                    </Link>
                                </Animated.div>
                            </li>
                        );
                    })}
                </TransitionGroup>

                {/* <LazyLoad height={300}>
                    <img src="https://cdn.dribbble.com/users/1413346/screenshots/4210043/invoice_1x.png" />
                </LazyLoad>
                <LazyLoad height={300}>
                    <img src="https://cdn.dribbble.com/users/1413346/screenshots/4137490/gradients_party_logo_1x.png" />
                </LazyLoad> */}
            </div>
        );
    }
}
