const ContactLetterList = ({ letter, list }) => {
    return (
        <div className="w-full">
            <div className="border-b border-gray-400 pl-4 py-4">
                {letter.toUpperCase()}
            </div>
            <div>
                {list.sort((a, b) => a.name > b.name)
                    .map((info, i) => <div key={i} className="flex items-center py-4 space-x-4">
                        <div className="rounded-full border border-gray-500 p-1 text-sm text-white bg-red-500">
                            {info.name.split(" ").map(n => n.charAt(0).toUpperCase()).join("")}
                        </div>
                        <div className="flex flex-col">
                            <p>{info.name}</p>
                            <p className="text-blue-400 text-sm">{info.mail}</p>
                        </div>
                    </div>)}
            </div>
        </div>
    );
}

export default ContactLetterList;