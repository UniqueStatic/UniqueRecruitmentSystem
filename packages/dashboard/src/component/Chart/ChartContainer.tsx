import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';

import Chart from './Chart';
import ChartNew from './ChartNew';
import withRoot from '../../style/withRoot';
import styles from '../../style/chart';
import { Recruitment } from '../../reducer/recruitments';

interface Props extends WithStyles {
    data: Recruitment[];
    fetchData: () => void;
    toggleSnackbarOn: (info: string) => void;
    launchRecruitment: (info: object) => void;
}

class ChartContainer extends React.PureComponent<Props> {
    constructor(props: Props) {
        super(props);
        this.props.fetchData();
    }

    render() {
        const { data, toggleSnackbarOn, launchRecruitment } = this.props;
        return (
            <>
                {data.map(i => <Chart data={i} key={i['_id']} />)}
                <ChartNew toggleSnackbarOn={toggleSnackbarOn} launchRecruitment={launchRecruitment} />
            </>
        )
    }
}

export default withRoot(withStyles(styles)(ChartContainer));
