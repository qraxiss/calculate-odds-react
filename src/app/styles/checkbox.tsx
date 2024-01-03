import styled from 'styled-components'

const SwitchLabel = styled.label`
    position: relative;
    display: inline-block;
    width: 3em;
    height: 1.5em;
`

const SwitchInput = styled.input`
    display: none;
`

const SwitchSlider = styled.div`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 1.5em;
`

const SliderThumb = styled.div`
    position: absolute;
    content: '';
    height: 1.25em;
    width: 1.25em;
    left: 0.25em;
    bottom: 0.25em;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
`
type props = {
    checked: boolean
    onChange: (e: any) => void
}

function Switch(props: props) {
    return (
        <SwitchLabel>
            <SwitchInput type="checkbox" checked={props.checked} onChange={props.onChange} />
            <SwitchSlider>
                <SliderThumb />
            </SwitchSlider>
        </SwitchLabel>
    )
}

export default Switch
