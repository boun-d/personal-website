import { NavigationList, NavigationItem } from './NavigationBar.styles'

interface Props {

}

const NavigationBar: React.FC<Props> = (props: Props) => {
    return (
        <>
            <NavigationList>
                <NavigationItem>my experience</NavigationItem>
                <NavigationItem>my projects</NavigationItem>
                <NavigationItem>about me</NavigationItem>
            </NavigationList>
        </>
    );
}

export default NavigationBar