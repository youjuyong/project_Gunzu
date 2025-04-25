import React from 'react';
import { Route } from 'react-router';

export default (
    <Route>
        <Route path="/"  />
        <Route path="/gameInfo/horseHouseInfo/horseListInfo" />
        <Route path="/gameInfo/horseHouseInfo/horseHouseWordInfo" />

        <Route path="/gameInfo/hongGilDongInfo/hongGilDongWordInfo" />

        <Route path="/gameInfo/recallHeroInfo/recallHeroWordInfo" />
        <Route path="/gameInfo/recallHeroInfo/recallHeroExpiration" />
        <Route path="/gameInfo/recallHeroInfo/recallHeroList" />

        <Route path="/gameInfo/systemOfKing/systemOfKingWordInfo" />
        <Route path="/gameInfo/systemOfKing/systemOfKingLawInfo" />
        <Route path="/gameInfo/systemOfKing/systemOfKingMacroPatrol" />
        <Route path="/gameInfo/systemOfKing/systemOfKingMacoThinking" />

        <Route path="/gameInfo/staticsInfo/villageStaticsInfo" />
        <Route path="/gameInfo/weaponRecommand/weaponRecommandInfo" />
    </Route>
);