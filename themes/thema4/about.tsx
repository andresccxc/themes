import { Header } from "./components/header";

export function AboutT(props){
    const { value } = props;
    return <>
        <Header title={value.title} nav={value.nav}/>
    </>
}