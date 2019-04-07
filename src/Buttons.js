import React from 'react'

const Buttons = (props) => {
    return (
        <div
            style={{
                width: '190px',
                margin: '0 auto'
            }}
        >
            <button

                onClick={props.inc}
            >+1
            </button>
            <button
                onClick={props.dec}
            >-1
            </button>

            <button
                style={{
                    margin: '0 10px'
                }}
                onClick={props.reset}
            >reset
            </button>

            <button
                onClick={props.incByFive}
            >+5
            </button>
            <button
                onClick={props.decByFive}
            >-5
            </button>

        </div>
    )
};

export default Buttons