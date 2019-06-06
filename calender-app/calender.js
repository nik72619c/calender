import  React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import moment from 'moment';
import {Button,Header} from 'react-native-elements'
export default class Calender extends React.Component{
    constructor(){
        super();
        this.state={
            month: 1,
            daysArray: [],

        };
        this.calculateDays= this.calculateDays.bind(this);
        this.calculateDaysPrev= this.calculateDaysPrev.bind(this);
    }
    componentDidMount() {
        this.calculateDays();
    }

    calculateDays(){
        let tempArr=[];
        let days;
        this.setState({
            month: this.state.month,
        },()=>{
            days= moment('2019-'+ this.state.month,"YYYY-MM").daysInMonth();
            console.log('days', days);
            for(let i=1;i<=days;i++){
                tempArr.push(i);
            }
            this.setState({daysArray: tempArr});
        });
    }

    calculateDaysNext = () => {
        let tempArr=[];
        let days;
        this.setState({
            month: this.state.month+1,
        },()=>{
            days= moment('2019-'+ this.state.month,"YYYY-MM").daysInMonth();
            console.log('days', days);
            for(let i=1;i<=days;i++){
                tempArr.push(i);
            }
            this.setState({daysArray: tempArr});
        });
    }

    calculateDaysPrev(){
        let tempArr=[];
        let days;
        this.setState({
            month: this.state.month-1,
        },()=>{
            days= moment('2019-'+ this.state.month,"YYYY-MM").daysInMonth();
            console.log('days', days);
            for(let i=1;i<=days;i++){
                tempArr.push(i);
            }
            this.setState({daysArray: tempArr});
        });
    }
    render() {
    let mon=moment.months(this.state.month-1);
    console.log('loggin moment in the render function..', mon);
        return(<View>
                <Header
                    centerComponent={{ text: mon, style: { color: '#fff' } }}
                />
            <View style={styles.container}>

                {/*<View style={styles.child}><Text style={{padding: '40%', color: 'white'}}>1</Text></View>*/}


                {
                    this.state.daysArray.map((day,index)=>{
                        return (<View style={styles.child} key={index}>
                            <Text style={{padding: '40%', color: 'white'}}>{day}</Text>
                                </View>)
                    })
                }
                <View style={{
                    width: 200,
                    position: 'absolute',
                    left: 100,
                    top: 600
                }}>
                <Button type="solid" title="next" buttonStyle={{marginBottom: 10}} onPress={this.calculateDaysNext}/>
                <Button type="solid" title="prev" buttonStyle={{}} onPress={this.calculateDaysPrev}/>
                </View>
            </View>
            </View>

        )
    }
}

const styles=StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    child: {
        backgroundColor: 'green',
        width: 50,
        height: 50,
        margin: 10,
        borderRadius: 50
    }
});