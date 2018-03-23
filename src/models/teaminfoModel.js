import sql from 'mssql';

const Schema = sql.Schema;

export const TeaminfoSchema = new Schema(
    {
        Id:{
            type: String,
            required: 'Set up Id'
        }, 
        TeamName:{
            type: String
        }, 
        SupportTopicTier1:{
            type: String
        },
        TeamManager:{
            type: String
        },
        TAAlias:{
            type: String
        },
        TeamAlias:{
            type: String
        },
        PODs:{
            type: String
        },
        CSSWiki:{
            type: String
        },
        Keywords:{
            type: String,
            required: 'Enter Keywords'
        }


    }
);
