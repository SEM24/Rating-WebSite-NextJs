import React from "react";
import {Button, Htag, P} from "@/components";

export default function Home(): JSX.Element {
    return (<>
            <Htag tag='h1'>Text</Htag>
            <Button appearance='primary' arrow='right'>Button</Button>
            <Button appearance='ghost' arrow='down'>Button2</Button>
            <P size={"s"}>S text</P>
            <P size={"m"}>M text</P>
            <P size={"l"}>L text</P>
        </>
    );
}