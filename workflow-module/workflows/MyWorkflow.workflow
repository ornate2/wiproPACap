{
	"contents": {
		"754332eb-9824-4172-9b85-17bd39b66c45": {
			"classDefinition": "com.sap.bpm.wfs.Model",
			"id": "zmm.po.savings",
			"subject": "Saving Forms PO#",
			"name": "POSavingsWF",
			"documentation": "POSavingsWF",
			"lastIds": "62d7f4ed-4063-4c44-af8b-39050bd44926",
			"events": {
				"11a9b5ee-17c0-4159-9bbf-454dcfdcd5c3": {
					"name": "StartEvent1"
				},
				"2798f4e7-bc42-4fad-a248-159095a2f40a": {
					"name": "EndEvent1"
				}
			},
			"activities": {
				"28c25b28-baaa-4fa2-8c29-5999df6e3487": {
					"name": "UserTask"
				}
			},
			"sequenceFlows": {
				"c6b99f32-5fe6-4ab6-b60a-80fba1b9ae0f": {
					"name": "SequenceFlow1"
				},
				"d77de184-6f93-4ca0-851c-3dee071a4338": {
					"name": "SequenceFlow2"
				}
			},
			"diagrams": {
				"42fa7a2d-c526-4a02-b3ba-49b5168ba644": {}
			}
		},
		"11a9b5ee-17c0-4159-9bbf-454dcfdcd5c3": {
			"classDefinition": "com.sap.bpm.wfs.StartEvent",
			"id": "startevent1",
			"name": "StartEvent1"
		},
		"2798f4e7-bc42-4fad-a248-159095a2f40a": {
			"classDefinition": "com.sap.bpm.wfs.EndEvent",
			"id": "endevent1",
			"name": "EndEvent1"
		},
		"28c25b28-baaa-4fa2-8c29-5999df6e3487": {
			"classDefinition": "com.sap.bpm.wfs.UserTask",
			"subject": "User_Task",
			"description": "User_Task workflow",
			"priority": "MEDIUM",
			"isHiddenInLogForParticipant": false,
			"supportsForward": false,
			"userInterface": "sapui5://processAutomation.wiproworkflowuimodule/wipro.workflowuimodule",
			"recipientUsers": "pushpak.jha@sumodigitech.com",
			"userInterfaceParams": [],
			"id": "usertask1",
			"name": "UserTask",
			"documentation": "UserTask workflow"
		},
		"c6b99f32-5fe6-4ab6-b60a-80fba1b9ae0f": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow1",
			"name": "SequenceFlow1",
			"sourceRef": "11a9b5ee-17c0-4159-9bbf-454dcfdcd5c3",
			"targetRef": "28c25b28-baaa-4fa2-8c29-5999df6e3487"
		},
		"d77de184-6f93-4ca0-851c-3dee071a4338": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow2",
			"name": "SequenceFlow2",
			"sourceRef": "28c25b28-baaa-4fa2-8c29-5999df6e3487",
			"targetRef": "2798f4e7-bc42-4fad-a248-159095a2f40a"
		},
		"42fa7a2d-c526-4a02-b3ba-49b5168ba644": {
			"classDefinition": "com.sap.bpm.wfs.ui.Diagram",
			"symbols": {
				"df898b52-91e1-4778-baad-2ad9a261d30e": {},
				"53e54950-7757-4161-82c9-afa7e86cff2c": {},
				"6bb141da-d485-4317-93b8-e17711df4c32": {},
				"bb1688f3-d129-49af-8e77-d383f755fbf3": {},
				"faa15490-d541-43bf-b3da-fc6ece5bbddb": {}
			}
		},
		"df898b52-91e1-4778-baad-2ad9a261d30e": {
			"classDefinition": "com.sap.bpm.wfs.ui.StartEventSymbol",
			"x": 100,
			"y": 100,
			"width": 32,
			"height": 32,
			"object": "11a9b5ee-17c0-4159-9bbf-454dcfdcd5c3"
		},
		"53e54950-7757-4161-82c9-afa7e86cff2c": {
			"classDefinition": "com.sap.bpm.wfs.ui.EndEventSymbol",
			"x": 340,
			"y": 100,
			"width": 35,
			"height": 35,
			"object": "2798f4e7-bc42-4fad-a248-159095a2f40a"
		},
		"6bb141da-d485-4317-93b8-e17711df4c32": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "116,116.375 236.24147286593848,116.375",
			"sourceSymbol": "df898b52-91e1-4778-baad-2ad9a261d30e",
			"targetSymbol": "bb1688f3-d129-49af-8e77-d383f755fbf3",
			"object": "c6b99f32-5fe6-4ab6-b60a-80fba1b9ae0f"
		},
		"bb1688f3-d129-49af-8e77-d383f755fbf3": {
			"classDefinition": "com.sap.bpm.wfs.ui.UserTaskSymbol",
			"x": 186.24147286593848,
			"y": 86.75,
			"width": 100,
			"height": 60,
			"object": "28c25b28-baaa-4fa2-8c29-5999df6e3487"
		},
		"faa15490-d541-43bf-b3da-fc6ece5bbddb": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "236.24147286593848,117.125 357.5,117.125",
			"sourceSymbol": "bb1688f3-d129-49af-8e77-d383f755fbf3",
			"targetSymbol": "53e54950-7757-4161-82c9-afa7e86cff2c",
			"object": "d77de184-6f93-4ca0-851c-3dee071a4338"
		},
		"62d7f4ed-4063-4c44-af8b-39050bd44926": {
			"classDefinition": "com.sap.bpm.wfs.LastIDs",
			"sequenceflow": 4,
			"startevent": 1,
			"endevent": 1,
			"usertask": 1,
			"scripttask": 2
		}
	}
}