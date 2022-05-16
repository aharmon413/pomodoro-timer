import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import Timer from '../components/Timer';

describe('Header text changes depending on current time block', () => {
    it("should say 'Let's get to work!' during a session", () => {
        render(<Timer />);
        const h1 = screen.getByRole('heading', {level: 1});
        expect(h1).toHaveTextContent("Let's get to work!");
    });

    it("should say 'Time for a break!' during a break", () => {
        jest.useFakeTimers('modern');
        render(<Timer />);
        const h1 = screen.getByRole('heading', {level: 1});
        const startStopButton = screen.getByTestId('start-stop');
        act(() => {
            userEvent.click(startStopButton);
            jest.advanceTimersByTime(1501000);
        });
        expect(h1).toHaveTextContent('Time for a break!');
        jest.useRealTimers();
    });
});

describe('Time blocks should stay within defined bounds', () => {
    it("should not allow a time block to be set above 60 minutes", () => {
        render(<Timer />);
        const incrementButton = screen.getAllByTestId('increment');
        const timeBlockLength = screen.getAllByTestId('time-length');
        for (let i = 0; i < 40; i++) {
            userEvent.click(incrementButton[0]);
        }
        expect(timeBlockLength[0]).toHaveTextContent('60');
    });

    it("should not allow a time block to be set under one minute", () => {
        render(<Timer />);
        const decrementButton = screen.getAllByTestId('decrement');
        const timeBlockLength = screen.getAllByTestId('time-length');
        for (let i = 0; i < 6; i++) {
            userEvent.click(decrementButton[1]);
        }
        expect(timeBlockLength[1]).toHaveTextContent('1');
    });
});

describe('Timer reaches 00:00 before switching to next time block', () => {
    it('should display 00:00 at the end of a time block', () => {
        jest.useFakeTimers('modern');
        render(<Timer />);
        const progressLabel = screen.getByTestId('progress-label');
        const startStopButton = screen.getByTestId('start-stop');
        act(() => {
            userEvent.click(startStopButton);
            jest.advanceTimersByTime(1500000);
        });
        expect(progressLabel).toHaveTextContent('00:00');
        jest.useRealTimers();
    });
});