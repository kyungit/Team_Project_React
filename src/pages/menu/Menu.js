import Grid from '../../components/Common/Grid'
import Menu1 from '../../components/Menu/Menu1'
import Menu2 from '../../components/Menu/Menu2'
import Menu3 from '../../components/Menu/Menu3'
import Menu4 from '../../components/Menu/Menu4'
import MenuProvider from '../../provider/Menu_Provider'

export default function Menu() {
    return (
        <MenuProvider className="grid grid-cols-12 h-auto">
            <Grid>
                <Menu1 />
                <Menu2 />
                {/* <Menu3 />
                <Menu4 /> */}
            </Grid>
        </MenuProvider>
    )
}
