import React, { PureComponent } from "react";
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import withRoot from "../style/withRoot";
import styles from "../style/index";
import Chart from '../container/Chart';

class Data extends PureComponent<WithStyles> {
    render() {
        return <Chart />;
    }
}

export default withRoot(withStyles(styles)(Data));
