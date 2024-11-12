type FormPropsType = {
    setCity: React.Dispatch<React.SetStateAction<string>>;
    getWeather: (e: any) => void;
}

const Form = (props: FormPropsType) => {

    return (
        <form>
            <input type="text" name="city" placeholder="都市名" onChange={e => props.setCity(e.target.value)}/>
            <button type="submit" onClick={props.getWeather}>Get Weather</button>
        </form>
    );
};
export default Form;