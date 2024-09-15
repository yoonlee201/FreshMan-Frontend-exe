import { Button } from '../../ui/button';

interface IEditButton {
    isActive: boolean;
    children: string;
}

export default function SubmitButton({ isActive, children }: IEditButton) {
    return (
        <Button
            type="submit"
            className={`absolute bottom-8 flex w-full max-w-[393px] items-center justify-center rounded-xl py-4 text-white hover:bg-gray-200 ${isActive ? 'bg-black' : 'pointer-events-none bg-gray-200'}`}
        >
            {children}
        </Button>
    );
}
