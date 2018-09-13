sap.ui.define([	
	"inoart/core/Agent",
	"inoart/core/ModelManager",
	"inoart/core/Constants",
	"inoart/core/Utilities",
	"model/ModelConfig"
], function(Agent, ModelManager, Constants, Util, ModelConfig) {
	"use strict";

	var Genel = Agent.extend("model.yf.Genel", {

		constructor: function(sId) {
			
			Agent.apply(this, arguments);

			this.sServiceName = "ZYF_UI_GENEL_SRV";

			this.oModelConfig = new ModelConfig();

			this.oModelManager = new ModelManager(this);

		}, 

		getBolumListesi: function(aFilters) {
			
			var mParameters = { oFilter : aFilters };

			this.setProperty("/_BolumListesi", this.read("/BolumListesiSet", mParameters));
		},
	
		getConfigParams: function(aFilters) {
			
			var mParameters = { oFilter : aFilters };

			var oData = this.readSingle("/ConfigParamsSet(SirketKodu='')", mParameters);
			this.setProperty("/_Params",oData);
			this.setProperty("/_OrgParams",jQuery.extend(true, {},oData ));
		},

		getDagKanaliListesi: function(aFilters) {
			
			var mParameters = { oFilter : aFilters };

			this.setProperty("/_DagKanaliListesi", this.read("/DagKanaliListesiSet", mParameters));
		},

		getDilListesi: function(aFilters) {
			
			var mParameters = { oFilter : aFilters };

			this.setProperty("/_DilListesi", this.read("/DilListesiSet ", mParameters));
		},

		getParaBirimiListesi: function(aFilters) {
			
			var mParameters = { oFilter : aFilters };

			this.setProperty("/_ParaBirimiListesi", this.read("/ParaBirimiListesiSet", mParameters));
		},

		getSatOrgListesi: function(aFilters) {
			
			var mParameters = { oFilter : aFilters };

			this.setProperty("/_SatOrgListesi", this.read("/SatOrgListesiSet ", mParameters));
		},
		
		getSatisBolgeListesi: function(aFilters) {
			
			var mParameters = { oFilter : aFilters };

			this.setProperty("/_SatisBolgeListesi", this.read("/SatisBolgeListesiSet", mParameters));
		},

		getSatisDanismaniListesi: function(aFilters) {
			
			var mParameters = { oFilter : aFilters };

			this.setProperty("/_SatisDanismaniListesi", this.read("/SatisDanismaniListesiSet", mParameters));
		},

		getSatisDanismaniListesiFiltre: function(aFilters) {
			
			var mParameters = { oFilter : aFilters };

			this.setProperty("/_SatisDanismaniListesiFiltre", this.read("/SatisDanismaniListesiSet", mParameters));
		},

		updateConfigParams: function(oData) {

			var oReturnData = this.update("/ConfigParamsSet(SirketKodu='"+oData.SirketKodu+"')", oData);  

			return oReturnData ;
		},
		
		
	});


	return Genel;

});
			
