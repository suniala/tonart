import * as React from 'react';
import {Tone} from './types';

interface Props {
    readOnly?: boolean
    tones: Set<Tone>
    onToneToggle?: (tone: Tone) => void
}

interface KeyProps {
    tone: Tone
    selected: Set<Tone>
    x: number
    onToneToggle: (tone: Tone) => void
}

class WhiteKey extends React.Component<KeyProps, {}> {
    private onToneToggle = () => this.props.onToneToggle(this.props.tone);

    render() {
        return (
            <rect
                className={'key-white key-' + this.props.tone + (this.props.selected.has(this.props.tone) ? ' selected' : '')}
                width='50'
                height='100'
                x={this.props.x}
                y='0'
                onClick={this.onToneToggle}/>
        );
    }
}

class BlackKey extends React.Component<KeyProps, {}> {
    private onToneToggle = () => this.props.onToneToggle(this.props.tone);

    render() {
        return (
            <rect
                className={'key-black key-' + this.props.tone + (this.props.selected.has(this.props.tone) ? ' selected' : '')}
                width='40'
                height='60'
                x={this.props.x}
                y='0'
                onClick={this.onToneToggle}/>
        );
    }
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
                <svg xmlns='http://www.w3.org/2000/svg' version='1.1'
                     width='350mm'
                     height='100mm'
                     viewBox='0 0 350 100'
                >
                    <g>
                        <WhiteKey tone={Tone.C} x={0} onToneToggle={this.onToneToggle} selected={this.props.tones}/>
                        <WhiteKey tone={Tone.D} x={50} onToneToggle={this.onToneToggle} selected={this.props.tones}/>
                        <WhiteKey tone={Tone.E} x={100} onToneToggle={this.onToneToggle} selected={this.props.tones}/>
                        <WhiteKey tone={Tone.F} x={150} onToneToggle={this.onToneToggle} selected={this.props.tones}/>
                        <WhiteKey tone={Tone.G} x={200} onToneToggle={this.onToneToggle} selected={this.props.tones}/>
                        <WhiteKey tone={Tone.A} x={250} onToneToggle={this.onToneToggle} selected={this.props.tones}/>
                        <WhiteKey tone={Tone.B} x={300} onToneToggle={this.onToneToggle} selected={this.props.tones}/>
                        <BlackKey tone={Tone.Cs} x={30} onToneToggle={this.onToneToggle} selected={this.props.tones}/>
                        <BlackKey tone={Tone.Ds} x={80} onToneToggle={this.onToneToggle} selected={this.props.tones}/>
                        <BlackKey tone={Tone.Fs} x={180} onToneToggle={this.onToneToggle} selected={this.props.tones}/>
                        <BlackKey tone={Tone.Gs} x={230} onToneToggle={this.onToneToggle} selected={this.props.tones}/>
                        <BlackKey tone={Tone.As} x={280} onToneToggle={this.onToneToggle} selected={this.props.tones}/>
                    </g>
                </svg>
            </div>
        );
    }
}

export default Keyboard;
