export default interface OptionProps {
    optionName: string,
    optionIcon: React.ReactNode,
    routerPath: string,
    onClick: () => void,
}