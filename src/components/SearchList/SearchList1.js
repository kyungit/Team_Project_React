import { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import Column from '../Common/Column'
import SearchListContext from '../../context/SearchList_Context'
import Context from '../../context/Context'

export default function HigherOrderRadioInputTest() {
    const DormitoryType = useMemo(() => ['All', 'HOTEL', 'MOTEL', 'PENSION', 'GUESTHOUSE'], [])
    const ReviewStar = useMemo(() => ['All', '★ 9 ~ 10', '★ 8 ~ 9', '★ 7 ~ 8', '★ 6 ~ 7', '★ 5 ~ 6'], [])
    const Star = useMemo(() => ['All', '10', '9', '8', '7', '6'])
    const [SelectedIndexes, setSelectedIndexes] = useState([0])
    const [SelectedIndexes2, setSelectedIndexes2] = useState([0])
    const { setSearchdata } = useContext(Context)

    for (let i = 0; i < SelectedIndexes.length; i++) {
        console.log(`SelectedIndexes ${i} : `, DormitoryType[SelectedIndexes[i]])
    }
    for (let i = 0; i < SelectedIndexes2.length; i++) {
        console.log(`SelectedIndexes2 ${i} : `, ReviewStar[SelectedIndexes2[i]])
    }

    useEffect(() => {
        console.log('SelectedIndexes', SelectedIndexes)
        console.log('SelectedIndexes2', SelectedIndexes2)
        const selectedTypes = SelectedIndexes.map((index) => DormitoryType[index])
        const selectedStars = SelectedIndexes2.map((index) => Star[index])
        console.log('selectedTypes', selectedTypes)
        console.log('selectedStars', selectedStars)

        setSearchdata((prevData) => ({
            ...prevData,
            type: selectedTypes,
            star: selectedStars,
        }))
    }, [SelectedIndexes, SelectedIndexes2])

    const onChange = useCallback(
        (index) => () => {
            setSelectedIndexes((prevIndexes) => {
                if (index === 0) {
                    // 인덱스 0을 선택하는 경우, 모든 인덱스 선택 해제
                    return [0]
                } else if (prevIndexes.includes(0)) {
                    // 인덱스 0이 선택된 상태에서 다른 인덱스를 선택하는 경우, 인덱스 0 선택 해제 후 해당 인덱스 선택
                    return [index]
                } else if (prevIndexes.includes(index)) {
                    // 이미 선택된 인덱스인 경우 선택 해제
                    return prevIndexes.filter((selectedIndex) => selectedIndex !== index)
                } else {
                    // 선택되지 않은 인덱스를 추가 선택
                    return [...prevIndexes, index]
                }
            })
        },
        [],
    )

    const onChange2 = useCallback(
        (index) => () => {
            setSelectedIndexes2((prevIndexes) => {
                if (index === 0) {
                    // 인덱스 0을 선택하는 경우, 모든 인덱스 선택 해제
                    return [0]
                } else if (prevIndexes.includes(0)) {
                    // 인덱스 0이 선택된 상태에서 다른 인덱스를 선택하는 경우, 인덱스 0 선택 해제 후 해당 인덱스 선택
                    return [index]
                } else if (prevIndexes.includes(index)) {
                    // 이미 선택된 인덱스인 경우 선택 해제
                    return prevIndexes.filter((selectedIndex) => selectedIndex !== index)
                } else {
                    // 선택되지 않은 인덱스를 추가 선택
                    return [...prevIndexes, index]
                }
            })
        },
        [],
    )

    const radioInputs = useMemo(
        () =>
            DormitoryType.map((value, index) => (
                <label key={index} className="flex justify-start cursor-pointer label">
                    <input
                        type="checkbox"
                        name="DormitoryType"
                        className="mr-4 w-4 h-4"
                        checked={SelectedIndexes.includes(index)}
                        defaultValue={value}
                        onChange={onChange(index)}
                    />
                    <span className="label-text">{value}</span>
                </label>
            )),
        [DormitoryType, SelectedIndexes, onChange],
    )

    const radioInputs2 = useMemo(
        () =>
            ReviewStar.map((value, index) => (
                <label key={index} className="flex justify-start cursor-pointer label">
                    <input
                        type="checkbox"
                        name="ReviewStar"
                        className="mr-4 radio radio-primary"
                        checked={SelectedIndexes2.includes(index)}
                        defaultValue={value}
                        onChange={onChange2(index)}
                    />
                    <span className="label-text">{value}</span>
                </label>
            )),
        [ReviewStar, SelectedIndexes2, onChange2],
    )

    return (
        <div className="col-start-2 col-end-5 w-4/5 h-auto pt-16 flex flex-row justify-center">
            <Column className=" items-start">
                <section className="mt-4">
                    <div>PropertyType</div>
                    {/* {SelectedIndexes.map((index) => DormitoryType[index]).join(', ')} */}
                    <div className="flex p-4 mt-4">
                        <div className="mt-4">{radioInputs}</div>
                    </div>
                </section>
                <section className="mt-4">
                    <div>Star Rating</div>
                    {/* {SelectedIndexes2.map((index) => ReviewStar[index]).join(', ')} */}
                    <div className="flex p-4 mt-4">
                        <div className="mt-4">{radioInputs2}</div>
                    </div>
                </section>
            </Column>
        </div>
    )
}
