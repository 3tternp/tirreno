import {BaseGridWithPanel} from './BaseWithPanel.js?v=2';
import {
    renderClickableBotId,
    renderDevice,
    renderOs,
    renderBoolean,
    renderPhone,
    renderFullCountry,
    renderPhoneCarrierName,
    renderPhoneType,
    renderUserCounter,
} from '../DataRenderers.js?v=2';

export class PhonesGrid extends BaseGridWithPanel {
    get orderConfig() {
        return [];
    }

    get columnDefs() {
        const columnDefs = [
            {
                className: 'phone-number-col',
                targets: 0
            },
            {
                className: 'yes-no-col',
                targets: 1
            },
            {
                className: 'country-full-name-col',
                targets: 2
            },
            {
                className: 'phone-carrier-name-col',
                targets: 3
            },
            {
                className: 'phone-type-col',
                targets: 4
            },
            {
                className: 'phones-total-counters-col',
                targets: 5
            },
            {
                className: 'yes-no-col',
                targets: 6
            },
            //  TODO: return alert_list back in next release
            //{
            //    className: 'yes-no-col',
            //    targets: 6
            //}
        ];

        return columnDefs;
    }

    get columns() {
        const columns = [
            {
                data: 'phonenumber',
                render: (data, type, record) => {
                    return renderPhone(record);
                }
            },
            {
                data: 'invalid',
                render: renderBoolean
            },
            {
                data: 'full_country',
                render: renderFullCountry
            },
            {
                data: 'carrier_name',
                render: (data, type, record) => {
                    return renderPhoneCarrierName(record);
                }
            },
            {
                data: 'type',
                render: (data, type, record) => {
                    return renderPhoneType(record);
                }
            },
            {
                data: 'shared',
                name: 'shared',
                render: (data, type, record) => {
                    return renderUserCounter(data, 2);
                }
            },
            {
                data: 'fraud_detected',
                render: renderBoolean
            },
            //  TODO: return alert_list back in next release
            //{
            //    data: 'alert_list',
            //    render: renderBoolean
            //}
        ];

        return columns;
    }
}
