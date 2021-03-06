import {Md} from '../../../components/Md';

import classAndStyle from './classAndStyle';
import pureContainer from './PureContainer';

export default {
    ...classAndStyle,
    ...pureContainer,
    text: {
        type: 'string',
        key: true,
        description: <cx><Md>
            Header text.
        </Md></cx>
    },
    align: {
        type: 'string',
        key: true,
        description: <cx><Md>
            Header text alignment. One of `left`, `right` or `center`.
        </Md></cx>
    },
    allowSorting: {
        type: 'boolean',
        key: true,
        description: <cx><Md>
            Use to enable or disable sorting on the column. Default is `true`.
        </Md></cx>
    },
    colSpan: {
        type: 'number',
        key: true,
        description: <cx><Md>
            Specifies the number of columns a header cell should span. Default is `1`.
        </Md></cx>
    },
    rowSpan: {
        type: 'number',
        key: true,
        description: <cx><Md>
            Specifies the number of rows a header cell should span. Default is `1`.
        </Md></cx>
    }
};
