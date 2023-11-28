import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewPostBox from './NewPostBox';

describe('NewPostBox', () => {
    it('initially renders only start new post button', () => {
        const { queryByTestId } = render(<NewPostBox />);
        expect(queryByTestId('startNewPostButton')).toBeInTheDocument();
        expect(queryByTestId('newPostTitleBox')).toBeNull();
    });

    it('displays input fields and publish button on start button click', () => {
        const { getByTestId } = render(<NewPostBox />);
        fireEvent.click(getByTestId('startNewPostButton'));
        expect(getByTestId('newPostTitleBox')).toBeInTheDocument();
        expect(getByTestId('newPostClassTextBox')).toBeInTheDocument();
        expect(getByTestId('newPostTextBox')).toBeInTheDocument();
        expect(getByTestId('newPostSubmitButton')).toBeInTheDocument();
    });

    it('updates new post title on input change', () => {
        const { getByTestId } = render(<NewPostBox />);
        fireEvent.click(getByTestId('startNewPostButton'));
        const titleInput = getByTestId('newPostTitleBox') as HTMLInputElement;
        fireEvent.change(titleInput, { target: { value: 'New Title' } });
        expect(titleInput.value).toBe('New Title');
    });    
});
