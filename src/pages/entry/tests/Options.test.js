import { render, screen } from "../../../test-utils/testing-library-utils";

import Options from '../Options';
import { OrderDetailsProvider } from "../../../contexts/OrderDetails";

test('displays image for each scoop option from server', async () => {
    /*
    render(<Options optionType="scoops" />);

    // find images
    // 비동기식으로 가져온 데이터를 찾을 때는 async, await를 사용해야 한다.
    const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });
    expect(scoopImages).toHaveLength(2);

    // confirm alt text of images
    // @ts-ignore
    const altText = scoopImages.map((element) => element.alt);
    expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
    */

    render(<Options optionType="toppings" />);

    // find images
    // 비동기식으로 가져온 데이터를 찾을 때는 async, await를 사용해야 한다.
    const scoopImages = await screen.findAllByRole('img', { name: /topping$/i });
    expect(scoopImages).toHaveLength(3);

    // confirm alt text of images
    // @ts-ignore
    const altText = scoopImages.map((element) => element.alt);
    expect(altText).toEqual(['Cherries topping', 'M&Ms topping', 'Hot fudge topping']);
});