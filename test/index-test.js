/** ****************************************************************************************************
 * File: index-test.js
 * Project: http-response-class
 * @author Nick Soggin <iSkore@users.noreply.github.com> on 19-Oct-2017
 *******************************************************************************************************/
'use strict';
// @formatter:off

const
    chai     = require( 'chai' ),
    expect   = chai.expect,
    Response = require( '../index' ),
    obj = {
        classification: 'Success',
        statusCode: 200,
        data: 'pong',
        message: 'OK'
    };

describe( 'Response [http-response-class]', () => {
    const
        successful = new Response( 200, 'pong' ),
        failed     = new Response( 400, 'pong', 'tests', 'Bad Request' );

    it( `[new Response( 200, 'pong' )] should return ${JSON.stringify( obj )}`,
        () => {
            expect( successful ).to.eql( obj );
        }
    );

    it( `[successful.isSuccess]        should be true for sucessful HTTP code`,
        () => {
            expect( successful.isSuccess() ).to.eql( true );
        }
    );

    it( `[successful.statusText]       should be status text "OK"`,
        () => {
            expect( successful.statusText() ).to.eql( 'OK' );
        }
    );

    it( `[failed.isClientError]        should be true for Client Error Code`,
        () => {
            expect( failed.isClientError() ).to.be.true;
        }
    );

    it( `[failed.metadata]             should return have metadata`,
        () => {
            expect( failed.metadata ).to.eql( [ 'Bad Request' ] );
        }
    );
} );