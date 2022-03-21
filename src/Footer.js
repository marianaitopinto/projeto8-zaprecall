export default function Footer({done, setDone, icons, setIcons}) {
    return (
        <div className="footer">
            <p>{done}/8 Concluídos</p>
            {icons.map((icon) => icon)}
        </div>
    )
}