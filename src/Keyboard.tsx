import * as React from 'react';
import {Tone} from "./types";
import Key from "./Key";

interface Props {
    readOnly?: boolean
    tones: Set<Tone>
    onToneToggle?: (tone: Tone) => void
}

class Keyboard extends React.Component<Props, {}> {
    private onToneToggle = (tone: Tone) => {
        if (!this.props.readOnly) {
            (this.props.onToneToggle as (tone: Tone) => void)(tone)
        }
    };

    render() {
        return (
            <div className='keyboard u-full-width'>
                <div className='keys black'>
                    <Key onClick={this.onToneToggle} selected={this.props.tones} tone={Tone.Cs}/>
                    <Key onClick={this.onToneToggle} selected={this.props.tones} tone={Tone.Ds}/>
                    <div className='filler'>&nbsp;</div>
                    <Key onClick={this.onToneToggle} selected={this.props.tones} tone={Tone.Fs}/>
                    <Key onClick={this.onToneToggle} selected={this.props.tones} tone={Tone.Gs}/>
                    <Key onClick={this.onToneToggle} selected={this.props.tones} tone={Tone.As}/>
                </div>
                <div className='keys white'>
                    <Key onClick={this.onToneToggle} selected={this.props.tones} tone={Tone.C}/>
                    <Key onClick={this.onToneToggle} selected={this.props.tones} tone={Tone.D}/>
                    <Key onClick={this.onToneToggle} selected={this.props.tones} tone={Tone.E}/>
                    <Key onClick={this.onToneToggle} selected={this.props.tones} tone={Tone.F}/>
                    <Key onClick={this.onToneToggle} selected={this.props.tones} tone={Tone.G}/>
                    <Key onClick={this.onToneToggle} selected={this.props.tones} tone={Tone.A}/>
                    <Key onClick={this.onToneToggle} selected={this.props.tones} tone={Tone.B}/>
                </div>
            </div>
        );
    }
}

export default Keyboard;
