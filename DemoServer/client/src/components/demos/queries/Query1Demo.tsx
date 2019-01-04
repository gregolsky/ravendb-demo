﻿import * as React from "react";
import { Demo } from "../Demo";
import { ResultText  } from "../../demoDisplay/results/resultItems";

const resultsCreator = () => <ResultText />;

export const Query1Demo = () => <Demo
    paramDefinitions = {[
        { inputType: "text", name: "country", placeholder: "USA", paramKind: "text-param" }
    ]}
    resultsComponents = { resultsCreator }
/>;
