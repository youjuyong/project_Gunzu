import { equipmentBorrowModal } from "../../../utils/common/modalCss";
import { FlowModalContent     } from "../../../utils/common/modalCss";
import { ReactFlowProvider    } from "reactflow";
import { EquipButtonCompo     } from "./EquipButtonCompo";
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
import React, { useCallback, useEffect, useState, createRef } from "react";

interface equipmentType {
    modalBoolean   : boolean,
    setModalIsOpen : (e : any) => void
}

const nodeTypes = {
    equipNode: EquipNode
};

const ExquipmentFlowMd = ( props : equipmentType ) => {
    const [nodeDetail, setNodeDetail]          = useState<any>(null);
    const [nodes, setNodes, onNodesChange]:any = useNodesState<any>([]);
    const [edges, setEdges, onEdgesChange]     = useEdgesState([]);
    const connectionLineStyle = { stroke: "#fff" };
    const appRef = createRef();
    const nodeRef = React.useRef(null);

    useEffect(() => {
            setNodes([ {
            id: 'hidden-1',
            type: 'equipNode',
            data: { label: 'Node 1' },
            position: { x: 100, y: 100 },
            sourcePosition : 'right'
          },
          { id: 'hidden-2', type: 'equipNode', data: { label: 'Node 2' }, position: { x: 400, y: 100 }, targetPosition : 'left', sourcePosition : 'right'},
          { id: 'hidden-3', type: 'equipNode', data: { label: 'Node 3' }, position: { x: 700, y: 100 }, targetPosition : 'left', sourcePosition : 'right' },
          { id: 'hidden-4', type: 'equipNode', data: { label: 'Node 4' }, position: { x: 1000, y: 100 }, targetPosition : 'left', sourcePosition :  null }])
   
   
          setEdges([
            { id: 'hidden-e1-2', source: 'hidden-1', target: 'hidden-2', animated: true },
            { id: 'hidden-e1-3', source: 'hidden-2', target: 'hidden-3', animated: true },
            { id: 'hidden-e3-4', source: 'hidden-3', target: 'hidden-4', animated: true }
          ]);
    },[setEdges, setNodes]);

    const onConnect = useCallback((params:any) =>  {
        setEdges((els) => addEdge({ ...params, animated: true, style: { stroke: connectionLineStyle } }, els))
    },[]);
    console.log(nodeDetail);
    return ( 
        <div>
            <Modal
                isOpen={props.modalBoolean}
                style={equipmentBorrowModal}
                onRequestClose={() => props.setModalIsOpen(false)}
                ariaHideApp={false}
                contentLabel="Pop up Message"
                shouldCloseOnOverlayClick={false}
            >
                 <div className="modal-dialog popup_horseReview" role="document">
                                <FlowModalContent $open_value={String(props.modalBoolean)}>
                                        {/* <!-- 해더 영역 --> */}
                                        <div className="modal-header">
                                            <button type="button" className="close" data-dismiss="modal" onClick={() => {
                                                props.setModalIsOpen(false)
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
                                                        fitView
                                                        onConnect={onConnect}
                                                        connectionLineStyle={connectionLineStyle}
                                                        onNodeClick={(evt: React.MouseEvent, node : any) : void => {
                                                            console.log(evt, node);
                                                            setNodeDetail({ evt: evt.currentTarget, node });
                                                        }
                                                        }
                                                    >
                                                        <Background variant={BackgroundVariant.Lines} />
                                                        <Controls />
                                                        <MiniMap />
                                                        <Panel position="top-right">
                                                            <EquipButtonCompo />
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
