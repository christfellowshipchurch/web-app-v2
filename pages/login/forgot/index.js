/**
 * Forgot/index.js
 * 
 * Author: Caleb Panza
 * Created: Oct 25, 2021
 * 
 * When a user forgets their password for email logins they can request a temporary pin that allows them to update their password.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Layout, PasswordReset } from 'components';


const Forgot = ({ }) => {
    return <Layout title="Forgot My Password">
        <PasswordReset />
    </Layout>
};

Forgot.propTypes = {}
Forgot.defaultProps = {}

export default Forgot;