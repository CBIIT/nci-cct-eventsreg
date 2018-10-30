const fs = require('fs');

var division_sacs = ["HNC7", "HNCC", "HNCD", "HNC9", "HNC4", "HNCB", "HNC5", "HNC1", "HNC1D", "HNC1P", "HNC1Q", "HNC1N", "HNC1E", "HNC1R", "HNC1L", "HNC1H", "HNC1M", "HNC14", "HNC1K", "HNC17", "HNC16", "HNC1J"];
var branches_json = {HNC7Z36:"LPDS - Laboratory of Protein Dynamics & Signaling",HNC7Z37:"MIP - Molecular Imaging Program",HNC7Z30:"NOB - Neuro-oncology Branch",HNC7Z38:"VB - Vaccine Branch",HNC7R:"LEC - Laboratory of Experimental Carcinogenesis",HNC7Z02:"DTB - Developmental Therapeutics Branch",HNC7Z05:"LM - Laboratory of Metabolism",HNC7Z04:"LBMB - Laboratory of Biochemistry & Molecular Biology",HNC7Z07:"HIVDRP - Hiv Dynamics & Replication Program",HNC7Z06:"LRBGE - Laboratory of Receptor Biology & Gene Expression",HNC7Z32:"MCL - Macromolecular Crystallography Laboratory",HNC7Z18:"LP - Laboratory of Pathology",HNC7Z19:"POB - Pediatric Oncology Branch",HNC7Z17:"SB - Surgery Branch",HNC7Z12:"CDBL - Cancer & Developmental Biology Laboratory",HNC7Z11:"MCGP - Mouse Cancer Genetics Program",HNC7Z26:"RBB - Radiation Biology Branch",HNC7Y:"LICB - Laboratory of Immune Cell Biology",HNC7Q:"LCCTP - Laboratory of Cellular Carcinogenesis and Tumor Promotion",HNC7K:"LHC - Laboratory of Human Carcinogenesis",HNC7J:"LCMB - Laboratory of Cellular & Molecular Biology",HNC7L:"LGD - Laboratory of Genomic Diversity",HNC7Z56:"TGMB - Thoracic & Gi Malignancies Branch",HNC7B:"LMB - Laboratory of Molecular Biology",HNC7Z41:"LCDS - Laboratory of Cell & Developmental Signaling",HNC7Z43:"LCBG - Laboratory of Cancer Biology & Genetics",HNC79:"LCB - Laboratory of Cell Biology",HNC78:"LCO - Laboratory of Cellular Oncology",HNC71:"OD - Office of the Director",HNC72:"EIB - Experimental Immunology Branch",HNC74:"LTIB - Laboratory of Tumor Immunology & Biology",HNC7Z53:"TOSB - Thoracic & Oncologic Surgery Branch",HNC7Z50:"LGI - Laboratory of Genome Integrity",HNC7Z54:"WMB - Womens Malignancies Branch",HNC7Z55:"GMB - Genitourinary Malignancies Branch",HNC7Z16:"LYMB - Lymphoid Malignancies Branch",HNC7Z52:"EOB - Endocrine Oncology Branch",HNC7Z42:"CIP - Cancer & Inflammation Program",HNC7Z27:"HAMB - Hiv & Aids Malignancy Branch",HNC7Z25:"LGCP - Laboratory of Genitourinary Cancer Pathogenesis",HNC7Z24:"CGB - Cancer Genetics Branch",HNC7Z23:"ETIB - Experimental Transplantation & Immunology Branch",HNC7Z20:"ROB - Radiation Oncology Branch",HNC7Z29:"CPSB - Cancer Prevention Studies Branch",HNC7Z28:"UOB - Urologic Oncology Branch",HNCC6:"DCAB - Dna & Chromosome Aberrations Branch",HNCC1:"OD - Office of the Director",HNCCE:"TMB - Tumor Metastasis Branch",HNCCD:"CIHEB - Cancer Immunology, Hematology & Etiology Branch",HNCCB:"CCBB - Cancer Cell Biology Branch",HNCCA:"TBMB - Tumor Biology & Microenvironment Branch",HNCCC:"SBMAB - Structural Biology & Molecular Applications Branch",HNCD3:"BRP - Behavioral Research Program",HNCD1:"OD - Office of the Director",HNCD4:"SRP - Surveillance Research Program",HNCD5:"HDRP - Healthcare Delivery Research Program",HNCD2:"EGRP - Epidemiology & Genomics Research Program",HNC9C:"EBP - Epidemiology & Biostatistics Program",HNC91:"OD - Office of the Director",HNC9B:"HGP - Human Genetics Program",HNC41:"OD - Office of the Director",HNC49:"GOCRG - Gastrointestinal & Other Cancer Research Group",HNC4B:"CADRG - Chemopreventive Agent Development Research Group",HNC4D:"NSRG - Nutritional Science Research Group",HNC4G:"CBRG - Cancer Biomarkers Research Group",HNC4H:"EDRG - Early Detection Research Group",HNC4J:"BRG - Biometry Research Group",HNC42:"BGCRG - Breast & Gynecologic Cancer Research Group",HNC43:"PUCRG - Prostate & Urologic Cancer Research Group",HNC44:"LUACRG - Lung & Upper Aerodigestive Cancer Research Group",HNC4C:"COPTRG - Community Oncology & Prevention Trials Research Group",HNCB6:"CDP - Cancer Diagnosis Program",HNCB2:"RRP - Radiation Research Program",HNCB1:"OD - Office of the Director",HNCB8:"CIP - Cancer Imaging Program",HNCBA:"BRP - Biometric Research Program",HNCB3:"CTEP - Cancer Therapy Evaluation Program",HNCB9:"TRP - Translational Research Program",HNCB4:"DTP - Developmental Therapeutics Program",HNC53:"ORRPC - Office of Referral, Review, & Program Coordination",HNC52:"OEA - Office of Extramural Applications",HNC51:"OD - Office of the Director",HNC1R:"CRS - Center For Research Strategy",HNC1Q:"CCT - Center For Cancer Training",HNC1P:"CCG - Center For Cancer Genomics",HNC1K:"OHAM - Office of Hiv & Aids Malignancy",HNC1H:"NCIFOSO - Nci Frederick Office of Scientific Operations",HNC1N:"CGH - Center For Global Health",HNC1M:"OCC - Office of Cancer Centers",HNC14:"OCPL - Office of Communications and Public Liaison",HNC17:"OM - Office of Management",HNC1E:"CRCHD - Center To Reduce Cancer Health Disparities",HNC1D:"CBIIT - Center For Biomedical Informatics & Information Technology",HNC1J:"SBIR - Small Business Innovation Research (sbir) Development Center",HNC1L:"CSSI - Center For Strategic Scientific Initiatives",HNC16:"OSPA - Office of Science Planning & Assessment",HNC1D4:"CIB - Cancer Informatics Branch",HNC1D5:"ESIB - Evaluation & Strategic Initiatives Branch",HNC1D2:"IIOB - Infrastructure & It Operations  Branch",HNC1D6:"ODS - Office of Data Sharing",HNC1D3:"BOB - Business Operations Branch",HNC1P2:"OCG - Office of Cancer Genomics",HNC1P3:"TCGA - the Cancer Genome Atlas Program Office",HNC1Q2:"CTB - Cancer Training Branch",HNC1Q4:"OTE - Office of Training & Education",HNC1Q3:"IDWB - Intramural Diversity Workforce Branch",HNC1E4:"DTB - Diversity Training Branch",HNC1E2:"INB - Integrated Networks Branch",HNC1L3:"OCNR - Office of Cancer Nanotechnology Research",HNC1L2:"OPSO - Office of Physical Sciences-oncology",HNC1L4:"OCCPR - Office of Cancer Clinical Proteomics Research",HNC1L6:"OBBR - Office of Biorepositories & Biospecimen Research",HNC14P:"OPA - Office of Public Affairs",HNC14T:"OCC - Office of Cancer Content",HNC141:"OD - Office of the Director",HNC14Q:"ODDC - Office of Dissemination & Digital Communications",HNC17H:"OEFIA - Office of Extramural Finance & Information Analysis",HNC17J:"OGCR - Office of Government & Congressional Relations",HNC17G:"OBF - Office of Budget & Finance",HNC17F:"DCCPS - Admin Resource Ctr - Div of Cancer Control & Poplulation Science",HNC17C:"OGA - Office of Grants Administration",HNC17L:"DCP - Admin Resource Ctr - Division of Cancer Prevention",HNC17N:"OWPD - Office of Workforce Planning & Development",HNC17K:"OM - Admin Resource Ctr - Office of Management",HNC17U:"DCEG - Admin Resource Ctr - Division of Cancer Epidemiology & Genetics",HNC17T:"CCR - Admin Resource Ctr - Center For Cancer Research",HNC17W:"ITRC - Information Technology Resource Center",HNC17V:"DCTD - Admin Resource Ctr - Division of Cancer Treatment & Diagnosis",HNC17Q:"EO - Ethics Office",HNC17P:"TTC - Technology Transfer Center",HNC17S:"OD - Admin Resource Ctr - Office of the Director",HNC17Y:"OWR - Office of Workforce Relations",HNC17X:"OWM - Office of Workforce Management",HNC177:"OMPC - Office of Management Policy & Compliance",HNC178:"OSFM - Office of Space & Facility Management",HNC17B:"OA - Office of Acquisitions",HNC17M:"DEA - Admin Resource Ctr - Div of Cancer Biolgy & Div of Extrmrl Activ"};

console.log("\n *STARTING* \n");

for (i=0; i < division_sacs.length; i++) {
	// Get content from file
	var contents = fs.readFileSync('/github/eventsreg/playground/' + division_sacs[i]);
	// Define to JSON type
	var branches = JSON.parse(contents);
	//console.log("Get Division:" + division_sacs[i]);
	console.log(division_sacs[i]);
	//console.log(division_sacs[i]);
	console.dir(branches.length);
	//console.log("countThem: "+countThem(division_sacs[i]));
	//Master List printout for pasting into Drupal Webform
	//printBranchesDrupal(branches);
	//Master List printout for a json lisiting to repopulate form
	//printBranchesJSON(branches);
	//countThem(branches);
}

console.log("\n *ENDING* \n");

function countThem(sac) {
	var branches = branches_json;
	//console.log("Count Branches for:" + sac);
	var lenOfSACName = sac.length;
	var count = 0;

	for (var key in branches) {
    	var value = branches[key];
    	//console.log("key:"+key +" value:"+value);
		if(sac == key.substr(0, lenOfSACName) && key.length  == (sac.length +1) && sac != "HNC7") {
			count++;
		}
		if(sac == key.substr(0, lenOfSACName) && key.length  >= (sac.length +1) && sac == "HNC7") {
			count++;
		}
	    // Make an exception for sac "HNC7".  Just make it 45.  The rule about does nto work.
	    //if(sac == "HNC7") count = 45;
	}

	//console.log("count: " + count);
	return count;
}

function printBranchesDrupal(branches) {
	console.log("Branches: Paste Conetents in Drupal Webform");
	for(j=0; j < branches.length; j++) {
		console.log('            "'+ branches[j].sac + '" : "' + branches[j].shortName +' - ' +titleCase(branches[j].name) +'"');
	}
}

function printBranchesJSON(branches) {
	//console.log("Branches: JSON Output");
	//console.log('[');

	for(j=0; j < branches.length; j++) {
			console.log('"'+ branches[j].sac + '" : "' + branches[j].shortName +' - ' +titleCase(branches[j].name) +'",');
	}
	//console.log(']');
}

function titleCase(str) {
	str = str.toLowerCase().split(' ');
	for (var i = 0; i < str.length; i++) {
	  if(str[i] == 'of' || str[i] == 'the' || str[i] == 'and') {
	    str[i] = str[i].charAt(0).toLowerCase() + str[i].slice(1); 
	  } else {
	    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
	  }
	}
	return str.join(' ');
}


/*  NOTES:

Division - Master List.txt

Rest Calls:
NCI: https://userinfo-dev.nci.nih.gov/api/org/subbranches/sac/HNC
OD: subbranches/sac/HNC1

Array of SAC:
var divsion_sacs = ["HNC7", "HNCC", "HNCD", "HNC9", "HNC4", "HNCB", "HNC5", "HNC1", "HNC1D", "HNC1P", "HNC1Q", "HNC1N", "HNC1E", "HNC1R", "HNC1L", "HNC1H", "HNC1M", "HNC14", "HNC1K", "HNC17", "HNC16", "HNC1J"];


            HNC7: 'CCR - Center For Cancer Research'
            HNCC: 'DCB - Division of Cancer Biology'
            HNCD: 'DCCPS - Division of Cancer Control and Population Sciences'
            HNC9: 'DCEG - Division of Cancer Epidemiology and Genetics'
            HNC4: 'DCP - Division of Cancer Prevention'
            HNCB: 'DCTD - Division of Cancer Treatment and Diagnosis'
            HNC5: 'DEA - Division of Extramural Activities'
            HNC1: 'OD - Office of the Director'
            HNC1D: 'CBIIT - Center For Biomedical Informatics & Information Technology'
            HNC1P: 'OD CCG - Center For Cancer Genomics'
            HNC1Q: 'OD CCT - Center For Cancer Training'
            HNC1N: 'OD CGH - Center For Global Health'
            HNC1E: 'OD CRCHD - Center To Reduce Cancer Health Disparities'
            HNC1R: 'OD CRS - Center For Research Strategy'
            HNC1L: 'OD CSSI - Center For Strategic Scientific Initiatives'
            HNC1H: 'OD NCIFOSO - Nci Frederick Office of Scientific Operations'
            HNC1M: 'OD OCC - Office of Cancer Centers'
            HNC14: 'OD OCPL - Office of Communications and Public Liaison'
            HNC1K: 'OD OHAM - Office of Hiv & Aids Malignancy'
            HNC17: 'OD OM - Office of Management'
            HNC16: 'OD OSPA - Office of Science Planning & Assessment'
            HNC1J: 'OD SBIR - Small Business Innovation Research (sbir) Development Center'


wget "https://userinfo-dev.nci.nih.gov/api/org/subbranches/sac/HNC7" > HNC7.json
wget "https://userinfo-dev.nci.nih.gov/api/org/subbranches/sac/HNCC" > HNCC.json
wget "https://userinfo-dev.nci.nih.gov/api/org/subbranches/sac/HNCD" > HNCD.json
wget "https://userinfo-dev.nci.nih.gov/api/org/subbranches/sac/HNC9" > HNC9.json
wget "https://userinfo-dev.nci.nih.gov/api/org/subbranches/sac/HNC4" > HNC4.json
wget "https://userinfo-dev.nci.nih.gov/api/org/subbranches/sac/HNCB" > HNCB.json
wget "https://userinfo-dev.nci.nih.gov/api/org/subbranches/sac/HNC5" > HNC5.json
wget "https://userinfo-dev.nci.nih.gov/api/org/subbranches/sac/HNC1" > HNC1.json
wget "https://userinfo-dev.nci.nih.gov/api/org/subbranches/sac/HNC1D" > HNC1D.json
wget "https://userinfo-dev.nci.nih.gov/api/org/subbranches/sac/HNC1P" > HNC1P.json
wget "https://userinfo-dev.nci.nih.gov/api/org/subbranches/sac/HNC1Q" > HNC1Q.json
wget "https://userinfo-dev.nci.nih.gov/api/org/subbranches/sac/HNC1N" > HNC1N.json
wget "https://userinfo-dev.nci.nih.gov/api/org/subbranches/sac/HNC1E" > HNC1E.json
wget "https://userinfo-dev.nci.nih.gov/api/org/subbranches/sac/HNC1R" > HNC1R.json
wget "https://userinfo-dev.nci.nih.gov/api/org/subbranches/sac/HNC1L" > HNC1L.json
wget "https://userinfo-dev.nci.nih.gov/api/org/subbranches/sac/HNC1H" > HNC1H.json
wget "https://userinfo-dev.nci.nih.gov/api/org/subbranches/sac/HNC1M" > HNC1M.json
wget "https://userinfo-dev.nci.nih.gov/api/org/subbranches/sac/HNC14" > HNC14.json
wget "https://userinfo-dev.nci.nih.gov/api/org/subbranches/sac/HNC1K" > HNC1K.json
wget "https://userinfo-dev.nci.nih.gov/api/org/subbranches/sac/HNC17" > HNC17.json
wget "https://userinfo-dev.nci.nih.gov/api/org/subbranches/sac/HNC16" > HNC16.json
wget "https://userinfo-dev.nci.nih.gov/api/org/subbranches/sac/HNC1J" > HNC1J.json            


*/