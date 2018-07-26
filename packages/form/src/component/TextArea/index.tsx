import * as React from 'react';
import Button from '../Button';

interface Props {
    onChange: (e: React.ChangeEvent) => void;
}

class TextArea extends React.Component<Props> {
    public render() {
        return (
            <div className='textAreaContainer'>
                <Button name='自我介绍'
                        bgColor='primary'
                        textColor='white'
                        className='textAreaLabel disabled'
                />
                <textarea className='textArea' onChange={this.props.onChange} />
            </div>
        );
    }
}

export default TextArea;
