import { useContext } from "react";
import { LevelContext } from "../../contexts/LevelContext";

export const Heading = ({ children }) => {
    const level = useContext(LevelContext);

    switch (level) {
        case 1: return <h1 className="font-bold text-2xl py-2">{children}</h1>;
        case 2: return <h2 className="font-semibold text-blue-500 text-xl">{children}</h2>;
        case 3: return <h3 className="font-semibold text-blue-500 text-lg">{children}</h3>;
        default: return <p>{children}</p>;
    }
}

export const Text = ({ children }) => {
    return <p className="py-1">{children}</p>
}

export const Section = ({ children }) => {
    const level = useContext(LevelContext);

    return (
        <section>
            <LevelContext.Provider value={level + 1}>
                {children}
            </LevelContext.Provider>
        </section>
    )
}