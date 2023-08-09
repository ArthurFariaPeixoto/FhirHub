import React from "react";

import { motion } from "framer-motion";
// import LocalFireDepartmentIcon from '@mui/icons-material';

const Logo = () => {
    return (
        <motion.div>
            <a href="/fhirHub/">
                <motion.img src="https://www.hl7.org/fhir/assets/images/fhir-logo-www.png" alt="FhirHUB" width={180} />
                {/* <LocalFireDepartmentIcon /> */}
            </a>
            
        </motion.div>
    );
};

export { Logo };
