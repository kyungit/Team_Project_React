import Grid from '../../components/Common/Grid'
import Search from '../../features/Search/container'
import SearchList1 from '../../components/SearchList/SearchList1'
import SearchList2 from '../../components/SearchList/SearchList2'
import SearchListProvider from '../../SearchList_Provider'

export default function SearchList() {
    return (
        <SearchListProvider className="grid grid-cols-12 h-auto">
            <Grid>
                <Search />
                <SearchList1 />
                <SearchList2 />
            </Grid>
        </SearchListProvider>
    )
}
