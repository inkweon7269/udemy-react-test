import { render, screen, waitFor } from "../../../test-utils/testing-library-utils";
import OrderEntry from "../OrderEntry";
import {rest} from "msw";
import {server} from "../../../mocks/server";

// only() : 여러 개의 테스트가 있고 한 개의 테스트만 진행할 때 사용, 그외 테스트들은 skipped로 표기
test.only('handles error for scoops and toppings routes', async () => {
    // resetHandles() : 핸들러로르 오버라이드 할 때 사용, 핸들러를 인수로 취하고 서버에 관한 엔드포인트가 있는 모든 핸들러를 재설정
    server.resetHandlers(
        rest.get('http://localhost:3030/scoops', (req, res, ctx) => res(ctx.status(500))),
        rest.get('http://localhost:3030/toppings', (req, res, ctx) => res(ctx.status(500))),
    );

    render(<OrderEntry />);

    // waitFor() : 인수로 전달한 값의 변화가 완료될 때까지 기다릴 때 사용
    await waitFor(async () => {
        // 첫 번째 서버 호출이 반환됐을 때 성공할 수 있었지만 우리는 두 개의 Alert이 필요하기 때문에 waitFor() 사용
        const alerts = await screen.findAllByRole('alert');
        expect(alerts).toHaveLength(2);
    })
});

// skip() : 테스트를 스킵할 때 사용
test.skip('not a real test', () => {})