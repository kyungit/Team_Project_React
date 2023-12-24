import Grid from '../../components/Common/Grid'
import RoomInfo1 from '../../components/RoomInfo/RoomInfo1'
import RoomInfo2 from '../../components/RoomInfo/RoomInfo2'
import RoomInfo3 from '../../components/RoomInfo/RoomInfo3'
import RoomInfo4 from '../../components/RoomInfo/RoomInfo4'
import Search from '../../components/Search/Search'
import RoomInfoProvider from '../../provider/RoomInfo_Provider'

export default function RoomInfo() {
    return (
        <RoomInfoProvider>
            <Grid>
                <Search />
                {/* <RoomInfo1 /> */}
                <RoomInfo2 />
                <RoomInfo3 />
                 <RoomInfo4 />
            </Grid>
        </RoomInfoProvider>
    )
}
