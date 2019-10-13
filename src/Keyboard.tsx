import * as React from 'react';
import {Tone} from "./types";
import Key from "./Key";

interface Props {
    tones: Set<Tone>
    onToneToggle: (tone: Tone) => void
}

class Keyboard extends React.Component<Props, {}> {
    render() {
        return (
            <div>
                <Key onClick={this.props.onToneToggle} selected={this.props.tones} tone={Tone.C}/>
                <Key onClick={this.props.onToneToggle} selected={this.props.tones} tone={Tone.Cs}/>
                <Key onClick={this.props.onToneToggle} selected={this.props.tones} tone={Tone.D}/>
                <Key onClick={this.props.onToneToggle} selected={this.props.tones} tone={Tone.Ds}/>
                <Key onClick={this.props.onToneToggle} selected={this.props.tones} tone={Tone.E}/>
                <Key onClick={this.props.onToneToggle} selected={this.props.tones} tone={Tone.F}/>
                <Key onClick={this.props.onToneToggle} selected={this.props.tones} tone={Tone.Fs}/>
                <Key onClick={this.props.onToneToggle} selected={this.props.tones} tone={Tone.G}/>
                <Key onClick={this.props.onToneToggle} selected={this.props.tones} tone={Tone.Gs}/>
                <Key onClick={this.props.onToneToggle} selected={this.props.tones} tone={Tone.A}/>
                <Key onClick={this.props.onToneToggle} selected={this.props.tones} tone={Tone.As}/>
                <Key onClick={this.props.onToneToggle} selected={this.props.tones} tone={Tone.B}/>
            </div>
        );
    }
}

export default Keyboard;
