import React from "react";
import ColorButton from "./components/ColorButton";
import SummaryForm from "./pages/summary/SummaryForm";
import Options from "./pages/entry/Options";
import OrderEntry from "./pages/entry/OrderEntry";
import { Container } from "react-bootstrap";
import { OrderDetailsProvider } from "./contexts/OrderDetails";

const App = () => {
    return (
        <Container>
            {/*<ColorButton />*/}
            {/*<SummaryForm />*/}
            <OrderDetailsProvider>
                {/* Summary page and entry page need provider */}
                <OrderEntry />
            </OrderDetailsProvider>
            {/* confirmation page does not need provider */}
        </Container>
    );
};

export default App;