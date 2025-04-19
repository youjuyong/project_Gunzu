import { equipmentBorrowModal } from "../../../utils/common/modalCss";
import { FlowModalContent     } from "../../../utils/common/modalCss";
import { ReactFlowProvider    } from "reactflow";
import { EquipButtonCompo     } from "./EquipButtonCompo";
import { EquipAlertCompo      } from "./EquipAlertCompo";
import { AxiosCall, errorHandler, Token } from "../../../utils/common/common";
import { API_IP_INFO          } from "../../../utils/apiUrl";
import EquipNode                from "./EquipNode";
import ReactFlow, {
    addEdge,
    useNodesState,
    useEdgesState,
    Controls,
    Background,
    BackgroundVariant,
    Panel,
    MiniMap,
    useReactFlow
    // MiniMap
  } from "reactflow";
import "reactflow/dist/style.css";
import Modal from "react-modal";
import React, { useCallback, useEffect, useState, createRef, SetStateAction } from "react";

interface equipmentType {
    modalBoolean   : boolean,
    equipId : number | null,
    setModalIsOpen : (e : any) => void,
    lentStatus : string  | null,
    reload : ( data : paramType ) => void,
    param : paramType
}

const nodeTypes = {
    equipNode: EquipNode
};

type paramType = {
    typeList : string,
    codeList : string
}

type equipDetlType = {
     EQUIP_ID           ?: string
   , DETL_EQUIP_ID      ?: string
   , DETL_EQUIP_NAME    ?: string
   , ENCHANT_YN         : string
   , ENCHANT_LEVL       : string
   , STAT_FIR           : string
   , STAT_SEC           : string
   , ENCHANT_TYPE       : string
   , EQUIP_IMG          : string 
   , SYMB_IMAG_TYPE     : string
   , imgUrl             : string
}

const ExquipmentFlowMd = ( props : equipmentType ) => {
    const token = Token();
    const [nodeDetail, setNodeDetail]          = useState<any>(null);
    const [nodes, setNodes, onNodesChange]:any = useNodesState<any>([]);
    const [edges, setEdges, onEdgesChange]     = useEdgesState([]);
    const connectionLineStyle = { stroke: "#fff" };

    useEffect(() => {
          if ( props.equipId === null ) return;
          AxiosCall("get", API_IP_INFO + '/equip/equip-detl-list', { equipId : props.equipId }, ( data ) => {
           
            if ( data.length === 0 ) {
                setNodes([]);
                setEdges([]);
            } else {
                const nodes:Object[] = [];
                const edges:SetStateAction<any> = [];
                data?.length && data.map(( node : equipDetlType, index : number ) => {
                    nodes.push({
                        id      : 'equip-' + node.DETL_EQUIP_ID,
                        type    : 'equipNode',
                        data    : { 
                                       detlName : node.DETL_EQUIP_NAME, 
                                      enchantYn : node.ENCHANT_YN,
                                    enchantLevl : node.ENCHANT_LEVL,
                                        statFir : node.STAT_FIR,
                                        statSec : node.STAT_SEC,
                                         symbol : node.SYMB_IMAG_TYPE,
                                         imgUrl : node.imgUrl,
                                    enchantType : node.ENCHANT_TYPE
                        },
                        position: { x: 100 + ( index * 300 ) , y: 100 },
                        targetPosition : 'left',
                        sourcePosition : 'right'
                    }); 
                    
                    if ( index === data?.length - 1 ) return;
    
                    edges.push({
                        id: 'equip-e1-'  + index , 
                        source: 'equip-' + (index + 1), 
                        target: 'equip-' + (index + 2), 
                        animated: true
                    });
                });
                setNodes([...nodes]);
                setEdges([...edges]);
            }
          }, (e) => {
                          errorHandler(e.response);
          }, token);
      
    },[props.equipId]);

    const onConnect = useCallback((params:any) =>  {
        setEdges((els) => addEdge({ ...params, animated: true, style: { stroke: connectionLineStyle } }, els))
    },[]);

    return ( 
        <div>
            <Modal
                isOpen={props.modalBoolean}
                style={equipmentBorrowModal}
                onRequestClose={() => props.setModalIsOpen({ equipId : null, openValue : false})}
                ariaHideApp={false}
                contentLabel="Pop up Message"
                shouldCloseOnOverlayClick={false}
            >
                 <div className="modal-dialog popup_horseReview" role="document">
                                <FlowModalContent $open_value={String(props.modalBoolean)}>
                                        {/* <!-- 해더 영역 --> */}
                                        <div className="modal-header">
                                            <button type="button" className="close" data-dismiss="modal" onClick={() => {
                                                props.setModalIsOpen({ equipId : null, openValue : false})
                                            }}>닫기
                                            </button>
                                        </div>
                                        {/* <!-- ./해더 영역 --> */}
                
                                        {/* <!-- 컨텐츠 영역 --> */}
                                        <div className="horse_popcontent">
                                            <div className="workflow-designer--gui">
                                                <ReactFlowProvider>
                                                    <ReactFlow
                                                        nodes={nodes}
                                                        edges={edges}
                                                        onNodesChange={onNodesChange}
                                                        nodesDraggable={false}
                                                        nodeTypes={nodeTypes}
                                                        onEdgesChange={onEdgesChange}
                                                        defaultViewport={  { x : 0, y : 250, zoom: 1} }
                                                        onConnect={onConnect}
                                                        connectionLineStyle={connectionLineStyle}
                                                        onNodeClick={(evt: React.MouseEvent, node : any) : void => {
                                                            setNodeDetail({ evt: evt.currentTarget, node });
                                                        }
                                                        }
                                                    >
                                                        <Background variant={BackgroundVariant.Lines} />
                                                        <Controls />
                                                        <MiniMap />
                                                        <Panel position="top-right">
                                                            <EquipButtonCompo reload={props.reload} param={props.param} modalOpen={props.setModalIsOpen} equipId={props.equipId} lentStatus={props.lentStatus} />
                                                        </Panel>
                                                        <Panel position="top-center">
                                                            <EquipAlertCompo/>
                                                        </Panel>
                                                    </ReactFlow>
                                                </ReactFlowProvider>
                                           </div>
                                            <div className="horseRevie_buttonset">
                                                <button data-dismiss="modal" onClick={() => {
                                                    props.setModalIsOpen(false)
                                                }}>취소
                                                </button>
                                            </div>
                                        </div>
                                        {/* <!-- ./컨텐츠 영역 --> */}
                                </FlowModalContent>
                 </div>
            </Modal>
        </div>
    )
}

export const ExquipmentFlowModal = React.memo(ExquipmentFlowMd);
