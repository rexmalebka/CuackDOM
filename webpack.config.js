const path = require( 'path' );

module.exports = {

    // bundling mode
    mode: 'production',
    // entry files
    entry: './src/Cuack.ts',

    // output bundles (location)
    output: {
        path: path.resolve( __dirname, 'app' ),
        filename: 'cuack.js',
    },

    // file resolutions
    resolve: {
        extensions: [ '.ts', '.js' ],
    },

    // loaders
    module: {
        rules: [
            {
                test: /\.tsx?/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
		{
			test: /\.worker\.(c|m)?js$/i,
			loader: 'worker-loader',
			options: {
				esModule: false,
			}
		}
        ]
    }
};
