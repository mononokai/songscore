interface CustomButtonProps {
    innerText: string
}

export function CustomButton({ innerText }: CustomButtonProps) {
    return (
        <div className="h-100 w-200">
            <button className="rounded border-white bg-grey border-2 p-5 hover:bg-slate-800 hover:shadow-lg active:bg-slate-700 text-3xl transition duration-200 ease-in-out
                ">{innerText}</button>
        </div>
    )
}